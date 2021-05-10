import React, { useEffect }  from "react";
import styled from "styled-components";


import { actionCreators as postActions } from "redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

import T_1 from "images/T_1.jpg";
import T_2 from "images/T_2.jpeg";
import T_3 from "images/T_3.jpg";
import T_4 from "images/T_4.jpg";
import T_5 from "images/T_5.jpeg";
import T_6 from "images/T_6.jpeg";
import T_7 from "images/T_7.jpg";

// 최신등록상품 리스트
const Card = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.getRecentProductsAPI());
  }, []);
  const _recent_product = useSelector((state) => state.post.recent_product);

  const { title, img, currentprice, desc } = props;

  return (
    <Wrap>
      <Head>
      <p style={{ fontSize: "45px", fontWeight:"bold"}}>방금 등록된 굿즈 <span style={{color : "#AE27FF"}}> 어서오고~</span></p>
      </Head>
      <Grid>
        <Cards>
        {_recent_product.map((j, index) => {
                return (
                  <Information key={index}>
                    <Image>
                      <img src={j.img[0]} />
                      <Dibs>
                      </Dibs>
                    </Image>  

                    <Desc>
                      <Title>
                        {j.title}
                      </Title>
                      <Currentprice>
                        {j.currentprice}원
                      </Currentprice>
                    </Desc>
                  </Information>
                );
              })}
        </Cards>
      </Grid>
    </Wrap>
  );
};

Card.defaultProps = {
  img: `${T_1}`,
  title: "프라이탁 아이패드 파우치",
  currentprice: "198,000원",
};

const Wrap = styled.div`
margin : 100px auto;
max-width : 1030px;
`;
const Head = styled.div`
display :flex;
justify-content : space-between;
`;

const Grid = styled.div`
display : flex;
margin : 45px 0 0 0;
`;
const Cards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 65px;
grid-row-gap: 48px;
margin-top : 45px 0 ;

`;

const Information =styled.div`
width : 300px;
height : 404px;
`;

const Image = styled.div`
& > img {
width : 300px; 
height : 300px;
border-radius : 30px 30px 0 0;
}
`;

const Title = styled.div`
margin : 0 142px 11px 25px;
padding-top : 16px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
width : 250px;
`;

const Currentprice = styled.div`
margin : 0 142px 21px 25px;
`;

const Dibs = styled.div`
z-index: 999;
width : 41px;
height : 41px;
background : #ae27ff;
position : relative;
margin : -60px 0 0 248px;
border-radius : 50px;
`;

const Desc  = styled.div`
font-size : 20px;
font-weight : bold;
color : #2e2e2e;
width : 300px;
min-height : 104px;
background : #f2f2f2;
border-radius : 0 0 30px 30px;
text-align : left;
box-sizing : border-box;
margin :13px 0 0 0;

`;

export default Card;
