import React, { useState } from "react";
import PerformanceChart from "./PerformanceChart";



const DashBoard = () => {
  return (
    <>
      <main>
        <div className="px-4 pt-6">
          <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 2xl:col-span-2">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                  $45,385
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  Sales this week
                </h3>
              </div>
              <div className="flex items-center justify-end flex-1 text-base font-bold text-green-500">
                12.5%
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Performance</h3>
              <PerformanceChart />
              <div className="flex items-center justify-between mb-4">

              </div>
              {/* <div id="main-chart"><div id="apexchartsoxawji74" className="apexcharts-canvas apexchartsoxawji74 apexcharts-theme-light"><svg id="SvgjsSvg1180" width="416" height="420" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg apexcharts-zoomable" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1182" className="apexcharts-inner apexcharts-graphical" transform="translate(71.01041793823242, 30)"><defs id="SvgjsDefs1181"><clipPath id="gridRectMaskoxawji74"><rect id="SvgjsRect1188" width="319.51025199890137" height="352.03333127593993" x="-4" y="-2" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskoxawji74"></clipPath><clipPath id="nonForecastMaskoxawji74"></clipPath><clipPath id="gridRectMarkerMaskoxawji74"><rect id="SvgjsRect1189" width="315.51025199890137" height="352.03333127593993" x="-2" y="-2" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine1187" x1="0" y1="0" x2="0" y2="348.03333127593993" stroke="#b6b6b6" stroke-dasharray="3" strokeLinecap="butt" className="apexcharts-xcrosshairs" x="0" y="0" width="1" height="348.03333127593993" fill="#b1b9c4" filter="none" fill-opacity="0.9" strokeWidth="1"></line><g id="SvgjsG1196" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1197" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1199" font-family="Inter, sans-serif" x="0" y="377.03333127593993" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1200">01 Feb</tspan><title>01 Feb</title></text><text id="SvgjsText1202" font-family="Inter, sans-serif" x="51.91837533315022" y="377.03333127593993" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1203">02 Feb</tspan><title>02 Feb</title></text><text id="SvgjsText1205" font-family="Inter, sans-serif" x="103.83675066630046" y="377.03333127593993" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1206">03 Feb</tspan><title>03 Feb</title></text><text id="SvgjsText1208" font-family="Inter, sans-serif" x="155.7551259994507" y="377.03333127593993" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1209">04 Feb</tspan><title>04 Feb</title></text><text id="SvgjsText1211" font-family="Inter, sans-serif" x="207.67350133260095" y="377.03333127593993" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1212">05 Feb</tspan><title>05 Feb</title></text><text id="SvgjsText1214" font-family="Inter, sans-serif" x="259.59187666575116" y="377.03333127593993" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1215">06 Feb</tspan><title>06 Feb</title></text><text id="SvgjsText1217" font-family="Inter, sans-serif" x="311.51025199890137" y="377.03333127593993" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1218">07 Feb</tspan><title>07 Feb</title></text></g><line id="SvgjsLine1219" x1="0" y1="349.03333127593993" x2="311.51025199890137" y2="349.03333127593993" stroke="#f3f4f6" stroke-dasharray="0" strokeWidth="1" strokeLinecap="butt"></line></g><g id="SvgjsG1236" className="apexcharts-grid"><g id="SvgjsG1237" className="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine1246" x1="0" y1="0" x2="311.51025199890137" y2="0" stroke="#e0e0e0" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1247" x1="0" y1="58.00555521265665" x2="311.51025199890137" y2="58.00555521265665" stroke="#e0e0e0" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1248" x1="0" y1="116.0111104253133" x2="311.51025199890137" y2="116.0111104253133" stroke="#e0e0e0" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1249" x1="0" y1="174.01666563796996" x2="311.51025199890137" y2="174.01666563796996" stroke="#e0e0e0" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1250" x1="0" y1="232.0222208506266" x2="311.51025199890137" y2="232.0222208506266" stroke="#e0e0e0" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1251" x1="0" y1="290.0277760632833" x2="311.51025199890137" y2="290.0277760632833" stroke="#e0e0e0" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1252" x1="0" y1="348.03333127593993" x2="311.51025199890137" y2="348.03333127593993" stroke="#e0e0e0" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-gridline"></line></g><g id="SvgjsG1238" className="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine1239" x1="0" y1="349.03333127593993" x2="0" y2="355.03333127593993" stroke="#f3f4f6" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1240" x1="51.91837533315023" y1="349.03333127593993" x2="51.91837533315023" y2="355.03333127593993" stroke="#f3f4f6" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1241" x1="103.83675066630046" y1="349.03333127593993" x2="103.83675066630046" y2="355.03333127593993" stroke="#f3f4f6" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1242" x1="155.75512599945068" y1="349.03333127593993" x2="155.75512599945068" y2="355.03333127593993" stroke="#f3f4f6" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1243" x1="207.67350133260092" y1="349.03333127593993" x2="207.67350133260092" y2="355.03333127593993" stroke="#f3f4f6" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1244" x1="259.59187666575116" y1="349.03333127593993" x2="259.59187666575116" y2="355.03333127593993" stroke="#f3f4f6" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1245" x1="311.51025199890137" y1="349.03333127593993" x2="311.51025199890137" y2="355.03333127593993" stroke="#f3f4f6" stroke-dasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1254" x1="0" y1="348.03333127593993" x2="311.51025199890137" y2="348.03333127593993" stroke="transparent" stroke-dasharray="0" strokeLinecap="butt"></line><line id="SvgjsLine1253" x1="0" y1="1" x2="0" y2="348.03333127593993" stroke="transparent" stroke-dasharray="0" strokeLinecap="butt"></line></g><g id="SvgjsG1190" className="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG1191" className="apexcharts-series" seriesName="Revenue" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1194" d="M 0 348.03333127593993L 0 141.533554718882C 18.17143136660258 141.533554718882 33.74694396654765 221.58122091234827 51.91837533315023 221.58122091234827C 70.08980669975281 221.58122091234827 85.66531929969788 257.5446651441953 103.83675066630046 257.5446651441953C 122.00818203290304 257.5446651441953 137.5836946328481 42.92411085736558 155.75512599945068 42.92411085736558C 173.92655736605326 42.92411085736558 189.50206996599834 141.533554718882 207.67350133260092 141.533554718882C 225.8449326992035 141.533554718882 241.42044529914858 199.53910993153886 259.59187666575116 199.53910993153886C 277.76330803235373 199.53910993153886 293.3388206322988 315.55022035685215 311.51025199890137 315.55022035685215C 311.51025199890137 315.55022035685215 311.51025199890137 315.55022035685215 311.51025199890137 348.03333127593993M 311.51025199890137 315.55022035685215z" fill="rgba(6,148,162,0.3)" fill-opacity="1" stroke-opacity="1" strokeLinecap="butt" strokeWidth="0" stroke-dasharray="0" className="apexcharts-area" index="0" clip-path="url(#gridRectMaskoxawji74)" pathTo="M 0 348.03333127593993L 0 141.533554718882C 18.17143136660258 141.533554718882 33.74694396654765 221.58122091234827 51.91837533315023 221.58122091234827C 70.08980669975281 221.58122091234827 85.66531929969788 257.5446651441953 103.83675066630046 257.5446651441953C 122.00818203290304 257.5446651441953 137.5836946328481 42.92411085736558 155.75512599945068 42.92411085736558C 173.92655736605326 42.92411085736558 189.50206996599834 141.533554718882 207.67350133260092 141.533554718882C 225.8449326992035 141.533554718882 241.42044529914858 199.53910993153886 259.59187666575116 199.53910993153886C 277.76330803235373 199.53910993153886 293.3388206322988 315.55022035685215 311.51025199890137 315.55022035685215C 311.51025199890137 315.55022035685215 311.51025199890137 315.55022035685215 311.51025199890137 348.03333127593993M 311.51025199890137 315.55022035685215z" pathFrom="M -1 3828.366644035339L -1 3828.366644035339L 51.91837533315023 3828.366644035339L 103.83675066630046 3828.366644035339L 155.75512599945068 3828.366644035339L 207.67350133260092 3828.366644035339L 259.59187666575116 3828.366644035339L 311.51025199890137 3828.366644035339"></path><path id="SvgjsPath1195" d="M 0 141.533554718882C 18.17143136660258 141.533554718882 33.74694396654765 221.58122091234827 51.91837533315023 221.58122091234827C 70.08980669975281 221.58122091234827 85.66531929969788 257.5446651441953 103.83675066630046 257.5446651441953C 122.00818203290304 257.5446651441953 137.5836946328481 42.92411085736558 155.75512599945068 42.92411085736558C 173.92655736605326 42.92411085736558 189.50206996599834 141.533554718882 207.67350133260092 141.533554718882C 225.8449326992035 141.533554718882 241.42044529914858 199.53910993153886 259.59187666575116 199.53910993153886C 277.76330803235373 199.53910993153886 293.3388206322988 315.55022035685215 311.51025199890137 315.55022035685215" fill="none" fill-opacity="1" stroke="#0694a2" stroke-opacity="1" strokeLinecap="butt" strokeWidth="4" stroke-dasharray="0" className="apexcharts-area" index="0" clip-path="url(#gridRectMaskoxawji74)" pathTo="M 0 141.533554718882C 18.17143136660258 141.533554718882 33.74694396654765 221.58122091234827 51.91837533315023 221.58122091234827C 70.08980669975281 221.58122091234827 85.66531929969788 257.5446651441953 103.83675066630046 257.5446651441953C 122.00818203290304 257.5446651441953 137.5836946328481 42.92411085736558 155.75512599945068 42.92411085736558C 173.92655736605326 42.92411085736558 189.50206996599834 141.533554718882 207.67350133260092 141.533554718882C 225.8449326992035 141.533554718882 241.42044529914858 199.53910993153886 259.59187666575116 199.53910993153886C 277.76330803235373 199.53910993153886 293.3388206322988 315.55022035685215 311.51025199890137 315.55022035685215" pathFrom="M -1 3828.366644035339L -1 3828.366644035339L 51.91837533315023 3828.366644035339L 103.83675066630046 3828.366644035339L 155.75512599945068 3828.366644035339L 207.67350133260092 3828.366644035339L 259.59187666575116 3828.366644035339L 311.51025199890137 3828.366644035339"></path><g id="SvgjsG1192" className="apexcharts-series-markers-wrap" data:realIndex="0"><g className="apexcharts-series-markers"><circle id="SvgjsCircle1260" r="0" cx="0" cy="0" className="apexcharts-marker w2vld92ehg no-pointer-events" stroke="#ffffff" fill="#0694a2" fill-opacity="1" strokeWidth="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1193" className="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1255" x1="0" y1="0" x2="311.51025199890137" y2="0" stroke="#b6b6b6" stroke-dasharray="0" strokeWidth="1" strokeLinecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1256" x1="0" y1="0" x2="311.51025199890137" y2="0" stroke-dasharray="0" strokeWidth="0" strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1257" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG1258" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG1259" className="apexcharts-point-annotations"></g><rect id="SvgjsRect1261" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" stroke-dasharray="0" fill="#fefefe" className="apexcharts-zoom-rect"></rect><rect id="SvgjsRect1262" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" stroke-dasharray="0" fill="#fefefe" className="apexcharts-selection-rect"></rect></g><rect id="SvgjsRect1186" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1220" className="apexcharts-yaxis" rel="0" transform="translate(41.01041793823242, 0)"><g id="SvgjsG1221" className="apexcharts-yaxis-texts-g"><text id="SvgjsText1222" font-family="Inter, sans-serif" x="20" y="31.6" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1223">$6600</tspan><title>$6600</title></text><text id="SvgjsText1224" font-family="Inter, sans-serif" x="20" y="89.60555521265664" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1225">$6500</tspan><title>$6500</title></text><text id="SvgjsText1226" font-family="Inter, sans-serif" x="20" y="147.61111042531329" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1227">$6400</tspan><title>$6400</title></text><text id="SvgjsText1228" font-family="Inter, sans-serif" x="20" y="205.61666563796993" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1229">$6300</tspan><title>$6300</title></text><text id="SvgjsText1230" font-family="Inter, sans-serif" x="20" y="263.6222208506266" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1231">$6200</tspan><title>$6200</title></text><text id="SvgjsText1232" font-family="Inter, sans-serif" x="20" y="321.62777606328325" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1233">$6100</tspan><title>$6100</title></text><text id="SvgjsText1234" font-family="Inter, sans-serif" x="20" y="379.6333312759399" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan1235">$6000</tspan><title>$6000</title></text></g></g><g id="SvgjsG1183" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend" style="max-height: 210px;"></div><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style="font-family: Inter, sans-serif; font-size: 14px;"></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(6, 148, 162);"></span><div className="apexcharts-tooltip-text" style="font-family: Inter, sans-serif; font-size: 14px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"><div className="apexcharts-xaxistooltip-text" style="font-family: Inter, sans-serif; font-size: 12px;"></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div> */}
            </div>

            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Latest Transactions
                  </h3>
                  <span className="text-base font-normal text-gray-500">
                    This is a list of latest transactions
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="#"
                    className="p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
                  >
                    View all
                  </a>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <div className="overflow-x-auto rounded-lg">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                            >
                              Transaction
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                            >
                              Date &amp; Time
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                            >
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr>
                            <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                              Payment from{" "}
                              <span className="font-semibold">
                                Bonnie Green
                              </span>
                            </td>
                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                              Apr 23 ,2021
                            </td>
                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                              $2300
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 text-sm font-normal text-gray-900 rounded-lg whitespace-nowrap rounded-left">
                              Payment refund to{" "}
                              <span className="font-semibold">#00910</span>
                            </td>
                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                              Apr 23 ,2021
                            </td>
                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                              -$670
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                              Payment failed from{" "}
                              <span className="font-semibold">#087651</span>
                            </td>
                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                              Apr 18 ,2021
                            </td>
                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                              $234
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 text-sm font-normal text-gray-900 rounded-lg whitespace-nowrap rounded-left">
                              Payment from{" "}
                              <span className="font-semibold">Lana Byrd</span>
                            </td>
                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                              Apr 15 ,2021
                            </td>
                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                              $5000
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                              Payment from{" "}
                              <span className="font-semibold">Jese Leos</span>
                            </td>
                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                              Apr 15 ,2021
                            </td>
                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                              $2300
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 text-sm font-normal text-gray-900 rounded-lg whitespace-nowrap rounded-left">
                              Payment from{" "}
                              <span className="font-semibold">
                                THEMESBERG LLC
                              </span>
                            </td>
                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                              Apr 11 ,2021
                            </td>
                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                              $560
                            </td>
                          </tr>

                          <tr>
                            <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                              Payment from{" "}
                              <span className="font-semibold">Lana Lysle</span>
                            </td>
                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                              Apr 6 ,2021
                            </td>
                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                              $1437
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                    2,340
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    New products this week
                  </h3>
                </div>
                <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-green-500">
                  14.6%
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                    5,355
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Visitors this week
                  </h3>
                </div>
                <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-green-500">
                  32.9%
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                    385
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    User signups this week
                  </h3>
                </div>
                <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-red-500">
                  -2.7%
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 my-4 2xl:grid-cols-2 xl:gap-4">
            <div className="h-full p-4 mb-4 bg-white rounded-lg shadow sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">
                  Latest Customers
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $320
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $67
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Thomes Lean
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $2367
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Lana Byrd
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $367
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
              <h3 className="mb-10 text-xl font-bold leading-none text-gray-900">
                Acquisition Overview
              </h3>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-xs font-semibold text-left text-gray-700 uppercase align-middle border-l-0 border-r-0 bg-gray-50 whitespace-nowrap">
                        Top Channels
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-left text-gray-700 uppercase align-middle border-l-0 border-r-0 bg-gray-50 whitespace-nowrap">
                        Users
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-left text-gray-700 uppercase align-middle border-l-0 border-r-0 bg-gray-50 whitespace-nowrap min-w-140-px"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="text-gray-500">
                      <th className="p-4 px-4 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                        Organic Search
                      </th>
                      <td className="p-4 px-4 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                        5,649
                      </td>
                      <td className="p-4 px-4 text-xs align-middle border-t-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">30%</span>
                          <div className="relative w-full">
                            <div className="w-full h-2 bg-gray-200 rounded-sm">
                              <div className="h-2 rounded-sm bg-cyan-600"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="p-4 px-4 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                        Referral
                      </th>
                      <td className="p-4 px-4 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                        4,025
                      </td>
                      <td className="p-4 px-4 text-xs align-middle border-t-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">24%</span>
                          <div className="relative w-full">
                            <div className="w-full h-2 bg-gray-200 rounded-sm">
                              <div className="h-2 bg-orange-300 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="p-4 px-4 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                        Direct
                      </th>
                      <td className="p-4 px-4 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                        3,105
                      </td>
                      <td className="p-4 px-4 text-xs align-middle border-t-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">18%</span>
                          <div className="relative w-full">
                            <div className="w-full h-2 bg-gray-200 rounded-sm">
                              <div className="h-2 bg-teal-400 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="p-4 px-4 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                        Social
                      </th>
                      <td className="p-4 px-4 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                        1251
                      </td>
                      <td className="p-4 px-4 text-xs align-middle border-t-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">12%</span>
                          <div className="relative w-full">
                            <div className="w-full h-2 bg-gray-200 rounded-sm">
                              <div className="h-2 bg-pink-600 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="p-4 px-4 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                        Other
                      </th>
                      <td className="p-4 px-4 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                        734
                      </td>
                      <td className="p-4 px-4 text-xs align-middle border-t-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">9%</span>
                          <div className="relative w-full">
                            <div className="w-full h-2 bg-gray-200 rounded-sm">
                              <div className="h-2 bg-indigo-600 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="p-4 pb-0 text-sm font-normal text-left align-middle border-t-0 whitespace-nowrap">
                        Email
                      </th>
                      <td className="p-4 pb-0 text-xs font-medium text-gray-900 align-middle border-t-0 whitespace-nowrap">
                        456
                      </td>
                      <td className="p-4 pb-0 text-xs align-middle border-t-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">7%</span>
                          <div className="relative w-full">
                            <div className="w-full h-2 bg-gray-200 rounded-sm">
                              <div className="h-2 bg-purple-500 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </main>
    </>
  );
};

export default DashBoard;
