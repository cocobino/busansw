import {css} from "@emotion/css";

const ContentsButton = () => {
    

    return <div className={css`
      display: flex;
      align-content: center;
      justify-content: center;
    `}><span className={css`
      display: flex;
      align-content: center;
      justify-content: center;
      padding: 8px 12px;
      background: black;
      color: white;
    `}>버튼내용을 입력해주세요.</span></div>
}

export default ContentsButton