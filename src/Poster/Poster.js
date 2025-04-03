"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_markdown_1 = require("react-markdown");
var Colophon_1 = require("./Colophon");
var ContentImage_1 = require("./ContentImage");
var Sidebar_1 = require("./Sidebar");
var Poster_module_css_1 = require("./Poster.module.css");
var Poster = function (props) {
    return (<div className={Poster_module_css_1.default.poster} style={{ width: props.width, height: props.height, maxWidth: "100%", maxHeight: "auto" }}>
      <Sidebar_1.default language={props.language} theme={props.theme} zlink={props.zlink} location={props.location} datetime={props.datetime} coop={props.coop} zoom={props.zoom}/>

      <div className={Poster_module_css_1.default.body}>
        <div className={Poster_module_css_1.default.upperBody}>
          <div className={Poster_module_css_1.default.bodyTitles}>
            <h3 className={Poster_module_css_1.default.subtitle}> {props.subtitle} </h3>
            <h1 className={Poster_module_css_1.default.title}> {props.title} </h1>
          </div>

          <div className={Poster_module_css_1.default.contentContainer}>
            <div className={Poster_module_css_1.default.contentText}>
              <react_markdown_1.default>
              {props.content}
              </react_markdown_1.default>
            </div>
            <ContentImage_1.default selectedFile={props.selectedFile}/>

          </div>

        </div>


        <div className={Poster_module_css_1.default.footer} style={{ all: 'initial' }}>
          <Colophon_1.default language={props.language}/>
        </div>

      </div>
    </div>);
};
exports.default = Poster;
