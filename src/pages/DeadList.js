import React, { useEffect } from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "react-responsive";

import PostCard from "components/PostCard";
import PostCardMobile from "components/PostCardMobile";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const DeadList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.getDeadlineProductAPI());
  }, []);
  const _deadline_product = useSelector((state) => state.post.deadline_product);

  return (
    <>
      <Desktop>
        <DeadContainer>
          <span>마감임박 리스트</span>
          {!_deadline_product ? (
            <div style={{ margin: "100px auto", color: "#c0c0c0 ", fontSize: "20px" }}>현재 마감임박 상품이 없습니다</div>
          ) : (
            _deadline_product.map((k, index) => {
              return (
                <PostCard
                  key={index}
                  {...k}
                  _onClick={() => {
                    history.push(`product/detail/${k._id}`);
                  }}
                />
              );
            })
          )}
        </DeadContainer>
      </Desktop>
      <Tablet>Tablet</Tablet>

      <Mobile>
        <DeadContainer>
          <span>마감임박 리스트</span>
          {!_deadline_product ? (
            <div style={{ margin: "100px auto", color: "#c0c0c0 ", fontSize: "20px" }}>현재 마감임박 상품이 없습니다</div>
          ) : (
            _deadline_product.map((k, index) => {
              return (
                <PostCardMobile
                  key={index}
                  {...k}
                  _onClick={() => {
                    history.push(`product/detail/${k._id}`);
                  }}
                />
              );
            })
          )}
        </DeadContainer>
      </Mobile>
    </>
  );
};

const DeadContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 100%;

  @media only screen and (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 100%;
  }
`;

export default DeadList;
