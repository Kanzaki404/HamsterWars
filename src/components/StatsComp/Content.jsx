import React, { useState } from "react";
import styled from "styled-components";
import testImage from "../../assets/testPhotoGallery/hamster-26.jpg";
import ContentItem from './ContentItem'
const ContentWraper = styled.div`
  width: 800px;
  border-radius: 3px;
  margin: 0px auto 50px auto;

  box-sizing: border-box;
  /* height:auto;  */
  /**min height 150px */
  min-height: 750px;

  .first {
    h1 {
      overflow: hidden;
      color: white;
    }

    h1:after {
      content: "";
      display: inline-block;
      height: 0.5em;
      vertical-align: bottom;
      width: 100%;
      margin-right: -100%;
      margin-left: 10px;
      border-top: 3px solid white;
    }
    .totalMatchNum {
      font-size: 75px;
      color: white;
      font-weight: 600;
      text-align: center;
    }
  }
  .second {
    max-height: 750px;
    width: 100%;
  }
`;
// const ListItem = styled.div`
//   width: 100%;
//   min-height: 75px;
//   box-sizing: border-box;
//   background-color: white;
//   border-radius: 5px;
//   padding-top: 1px;

//   /* justify-content: space-around;
//   align-items: center; */
//   margin-bottom: 5px;
//   margin-top: 5px;
//   :nth-child(even) {
//     background: #1c1c1c;
//     color: white;
//   }
//   .profile {
//     height: 50px;
//     width: 50px;
//     background-image: url(${testImage});
//     background-position: 50% 50%;
//     background-repeat: no-repeat;
//     background-size: cover;
//     border-radius: 50px;
//   }
//   .mainInfo {
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     margin-bottom: 5px;
//     margin-top: 5px;
//   }
//   .detailInfo {
//     display: block;
//     width: 50%;
//     height: 103px;
//     text-align: center;
//     margin: 10px auto 0px auto;
//     box-sizing: border-box;
//   }
// `;

export default function Content() {
  // const [cardState1, setCardState1] = useState(false);
  // const [cardState2, setCardState2] = useState(false);
  // const [cardState3, setCardState3] = useState(false);
  // const [cardState4, setCardState4] = useState(false);

  return (
    <ContentWraper>
      <div className="first">
        <h1>Top 5</h1>
      </div>

      <div className="second">
        <ContentItem></ContentItem>
        <ContentItem></ContentItem>
        <ContentItem></ContentItem>
        <ContentItem></ContentItem>
        
      </div>
      <div className="first">
        <h1>Bottom 5</h1>
      </div>
      <div className="second">
      <ContentItem></ContentItem>
      <ContentItem></ContentItem>
      <ContentItem></ContentItem>
      </div>
      <div className="first">
        <h1>Total Matches</h1>
        <p className="totalMatchNum">3426</p>
      </div>
    </ContentWraper>
  );
}
