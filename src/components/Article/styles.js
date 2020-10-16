import styled from 'styled-components/macro';

export const ArticleImg = styled.img`
   display: block;
   margin: 0 auto;
   width: 100%;
   filter: sepia(80%);
   -webkit-filter: sepia(80%);
   padding:0;
   height: 220px;
`;

export const ArticleContainer = styled.article`
   padding: 10px;
   margin:1%;
   display: flex;
   flex-direction:column;
   width:40%;
   cursor: pointer;
`;

export const Title = styled.h4`
    font-family: 'Old Standard TT', serif;
    text-align: left;
    text-transform: uppercase;
    margin-bottom:0;
    margin: 10px;
`;

export const Description = styled.p`
   margin-top: 2px;
   font-family: 'Libre Baskerville', serif;
   font-size: 0.7em;
   text-align:justify;
`;

export const SplitterTop = styled.div`
  border-top: 2px #7A786A solid;
  border-bottom: 2px #282723 solid;
  height: 3px;
`;

export const SplitterBottom = styled.div`
  border-top: 1.5px #282723 solid;
  height: 3px;
`;

export const Source = styled.p`
  margin: 0;
  padding: 2px;
  font-family: 'Libre Baskerville', serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.6em;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #F5F2D5;
`;

export const ImageContainer = styled.div`
   position: relative;
    width: 100%;
  &:hover ${Overlay}{
    opacity: 1;
  }
`;

export const EyeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Eye = styled.img`
top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
 position: absolute;
 width:60%;
`;

export const ReadMore = styled.div`
  font-family: 'Old Standard TT', serif;
  font-style: italic;
  position: absolute;
  top: 80%;
  text-transform: uppercase;
`; 

export const UrlAnchor = styled.a``;