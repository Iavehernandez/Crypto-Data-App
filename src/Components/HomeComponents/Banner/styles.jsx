import styled, {keyframes} from "styled-components";



export const BannerStyled = styled.section`
    width: 100%;
    padding: 60px;
    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;

   

    .hero-left{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;

     hr{
      margin-top: 50px;
       border: none; 
      height: 1px;
      margin: 30px 0; 
    }
    
    }

    .hero-right{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

       img {
           border: 2px solid rgba(255, 255, 255, 0.08);
           box-shadow: 0 8px 32px rgba(0,0,0,0.35);
           backdrop-filter: blur(18px);
           border-radius: 28px;
          width: 90%;
      
         }

    }

   .hero-stats {

   margin-top: 20px;
   display: flex;
   gap: 20px;

    span{
    
     background: rgba(255,255,255,0.05);
      padding: 8px 20px;
      border-radius: 12px;
      font-size: 14px;
      color: #f5f5f7;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.35);

      img{
        width: 25px;
        object-fit: contain;

      }


    }



   }

   @media (max-width: 575px) {

     flex-direction: column; 
    text-align: center;

    .hero-left {
      max-width: 100%;
      align-items: center;
    }
   

    .hero-left h2 {
      font-size: 36px;
      display: block;
    }


    .hero-stats span {
      font-size: 12px;
      padding: 6px 12px;
    }

    .hero-right img {
      border-radius: 18px;
    }

    .hero-stats {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

     .hero-right {
      margin-top: 40px; 
      img {
        width: 100%;
        max-width: 100%;
        border-radius: 18px;
      }
    }
}
   

`

export const RealCryptoStyled = styled.span`

    color: #7e558f;
    font-weight: 600;
    background: rgba(15,15,20,0.65);
    backdrop-filter: blur(18px);
 
    box-shadow: 0 8px 32px rgba(0,0,0,0.35);
    overflow: hidden;
    border-radius: 28px;
    padding: 7px;
    font-size: 14px;

    
`

export const TitleStyled = styled.h2`
    margin-top: 40px;
    color: #F5F5F7;
    font-size: 60px;
    font-weight: 800;
    display: block;
`

export const SpanTitleStyled = styled.span`
    background: linear-gradient(
    90deg,
    #9b61b4 0%,   
    #a360d3 50%,  
    #4f25b3 100% 
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent; 

  font-weight: 700;
  font-size: 60px;
  margin-top: 15px;


  @media (max-width: 575px){
        font-size: 36px;
    }
  
 
`

export const TextStyled = styled.p`
    color: ${props => props.theme.title.secondary};
    margin-top: 30px;
    text-align: justify;

`

const animateGlow = keyframes`
   0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const PrimaryBtn = styled.button`

    background: #8238a5;
    border-radius: 12px;
    color: #F5F5F7;
    font-weight: 600;
    font-family: ${props => props.theme.fonts.base};
    margin-right: 30px;
    cursor: pointer;

    padding: 16px 24px;
    position: relative;
    border-radius: 50px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.01);

     &::after {
    position: absolute;
    content: "";
    top: 15px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(0.9) translateZ(0);
    filter: blur(15px);
    background: linear-gradient(
      to left,
      #ff5770,
      #e4428d,
      #c42da8,
      #9e16c3,
      #6501de,
      #9e16c3,
      #c42da8,
      #e4428d,
      #ff5770
    );
    background-size: 200% 200%;
    animation: ${animateGlow} 1.25s linear infinite;
    border-radius: inherit; 
  }

 



`

export const Buttons = styled.div`

margin-top: 20px;
margin-bottom: 20px;

  @media (max-width: 575px){
   
    margin: 50px 0 25px 70px;
   
   }


`;


export const SecondaryBtn = styled.button`
    padding: 16px 24px;
    font-family: ${props => props.theme.fonts.base};
    font-weight: 500;
    width: 228px;
    color: #F5F5F7;
    border-radius: 50px;
    background: none;
    border: 2px solid rgba(255, 255, 255, 0.08);
    cursor: pointer;



      @media (max-width: 575px){
   
       margin-top: 50px;
       margin-right: 30px;
       width: 220px;
   }

`;



