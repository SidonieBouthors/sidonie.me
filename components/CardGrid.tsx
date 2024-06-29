"use client";
import { on } from "events";
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Layout, Layouts, Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

/**
 * CardGrid component that displays a grid of cards with a responsive layout
 * @param gridFormat Grid format that defines the breakpoints and the number of columns for each breakpoint
 * @param margin Margin between the cards
 * @param containerPadding Padding of the container
 * @param children Children components to be displayed in the grid
 */
export default function CardGrid({
  gridFormat,
  margin,
  containerPadding,
  children,
  sizes,
}: {
  gridFormat: [string, number, number][];
  margin: [number, number];
  containerPadding: [number, number];
  children: React.ReactElement[];
  sizes?: [number, number][];
}) {
  // Grid format that defines the breakpoints and the number of columns for each breakpoint
  // [breakpointName, breakPointSize, col]
  // const gridFormat: [string, number, number][] = [
  //   ["xl", 1200, 4],
  //   ["l", 1000, 3],
  //   ["m", 400, 2],
  //   ["s", 200, 1],
  // ];
  // const margin: [number, number] = [15, 15];
  // const containerPadding: [number, number] = [30, 30];

  var items = children == undefined || children == null ? [] : children;
  var [rowHeight, setRowHeight] = useState(0);

  const gridRef = useRef(null);
  useEffect(() => {
    const current = gridRef.current as any | null;
    const width = current?.elementRef.current.offsetWidth;
    const cols = findColNum(width);
    onWidthChange(width, margin, cols, containerPadding);
  });

  /**
   * Finds the number of columns based on the container width
   * @param width
   */
  function findColNum(width: number) {
    for (let i = 0; i < gridFormat.length; i++) {
      var [breakpointName, breakPointSize, col] = gridFormat[i];
      if (width > breakPointSize) {
        return col;
      }
    }
    return gridFormat[gridFormat.length - 1][2];
  }

  /**
   * Calculates the row height based on
   * the container width, margin, cols and container padding
   * @param containerWidth
   * @param margin
   * @param cols
   * @param containerPadding
   */
  function onWidthChange(
    containerWidth: number,
    margin: [number, number],
    cols: number,
    containerPadding: [number, number]
  ) {
    // Padding default to margin if undefined
    // Margin defaults to 10 if undefined
    const defaultValue = 10;
    const marginTotal =
      margin == undefined ? defaultValue * (cols - 1) : margin[0] * (cols - 1);
    const paddingTotal =
      containerPadding == undefined
        ? margin == undefined
          ? defaultValue * 2
          : margin[0] * 2
        : containerPadding[0] * 2;
    const h = (containerWidth - marginTotal - paddingTotal) / cols;
    setRowHeight(h);
  }

  /**
   * Generates the layout for each breakpoint
   * @returns layouts for each breakpoint
   */
  function makeLayout() {
    if (sizes == undefined) {
      var layouts: Layouts = {};
      for (let j = 0; j < gridFormat.length; j++) {
        var [breakpointName, breakPointSize, col] = gridFormat[j];
        var layout: Layout[] = [];
        for (let i = 0; i < items.length; i++) {
          var x = i % col;
          var y = Math.floor(i / col);
          layout.push({
            i: i.toString(),
            x: x,
            y: y,
            w: 1,
            h: 1,
            static: true,
          });
        }
        layouts[breakpointName] = layout;
      }
      return layouts;
    } else {
      // special case of cards with various sizes
      var layouts: Layouts = {};
      for (let j = 0; j < gridFormat.length; j++) {
        var [breakpointName, breakPointSize, col] = gridFormat[j];
        var layout: Layout[] = [];

        var positions: boolean[][] = [new Array(col).fill(false)];

        for (let i = 0; i < items.length; i++) {

          var width = sizes[i][0];
          var height = sizes[i][1];

          if (sizes[i][0] > col) {
            // if too large, resize the card
            width = col;
            height = (sizes[i][0] * sizes[i][1]) / col;
          }

          var x = 0;
          var y = 0;
          var found = false;

          // find first free position for the card
          while (!found) {
            found = true;

            for (let j = 0; j < width; j++) {
              for (let k = 0; k < height; k++) {
                while (y + k >= positions.length) {
                  positions.push(new Array(col).fill(false));
                }
                if (x + j >= col) {
                  found = false;
                  break;
                }
                if (positions[y + k][x + j]) {
                  found = false;
                  break;
                }
              }
            }

            if (found) {
              // mark the positions as taken
              for (let j = 0; j < width; j++) {
                for (let k = 0; k < height; k++) {
                  positions[y + k][x + j] = true;
                }
              }
            } else {
              // move to the next position
              x++;
              if (x + width > col) {
                x = 0;
                y++;
                if (y + height > positions.length) {
                  positions.push(new Array(col).fill(false));
                }
              }
            }
          }

          layout.push({
            i: i.toString(),
            x: x,
            y: y,
            w: width,
            h: height,
            static: true,
          });
        }

        layouts[breakpointName] = layout;
      }
      return layouts;
    }
  }

  /**
   * Generates the breakpoints for the responsive grid layout
   * @returns breakpoints for the responsive grid layout
   */
  function makeBreakpoints() {
    var breakpoints: { [key: string]: number } = {};
    for (let i = 0; i < gridFormat.length; i++) {
      var [breakpointName, breakPointSize, col] = gridFormat[i];
      breakpoints[breakpointName] = breakPointSize;
    }
    return breakpoints;
  }

  /**
   * Generates the number of columns for each breakpoint
   * @returns column number for each breakpoint
   */
  function makeCols() {
    var cols: { [key: string]: number } = {};
    for (let i = 0; i < gridFormat.length; i++) {
      var [breakpointName, breakPointSize, col] = gridFormat[i];
      cols[breakpointName] = col;
    }
    return cols;
  }

  return (
    <ResponsiveGridLayout
      ref={gridRef}
      className="layout"
      layouts={makeLayout()}
      margin={margin}
      containerPadding={containerPadding}
      rowHeight={rowHeight}
      breakpoints={makeBreakpoints()}
      cols={makeCols()}
      onWidthChange={onWidthChange}
    >
      {items.map((item, index) => (
        <div key={index.toString()}>{item}</div>
      ))}
    </ResponsiveGridLayout>
  );
}
