import React from 'react'
import ReactMarkdown from 'react-markdown';
import Colophon from './Colophon';
import ContentImage from './ContentImage';
import Sidebar from './Sidebar';
import { PosterData } from '@/types/poster';
import styles from './Poster.module.css'

const Poster: React.FC<PosterData> = (props) => {

  return (
    <div
    className={styles.poster}
    style={{ width: props.width, height: props.height, maxWidth: "100%",  maxHeight: "auto"}}
    >
      <Sidebar
        language={props.language}
        theme={props.theme}
        zlink={props.zlink}
        location={props.location}
        datetime={props.datetime}
        coop={props.coop}
        zoom={props.zoom}
      />

      <div className={styles.body}>
        <div className={styles.upperBody}>
          <div className={styles.bodyTitles}>
            <h3 className={styles.subtitle}> {props.subtitle} </h3>
            <h1 className={styles.title}> {props.title} </h1>
          </div>

          <div className={styles.contentContainer}>
            <div className={styles.contentText}>
              <ReactMarkdown>
              {props.content}
              </ReactMarkdown>
            </div>
            <ContentImage selectedFile={props.selectedFile} />

          </div>

        </div>


        <div className={styles.footer} style={{all: 'initial'}}>
          <Colophon language={props.language} />
        </div>

      </div>
    </div >
  )
}


export default Poster;
