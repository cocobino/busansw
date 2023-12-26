import {css} from "@emotion/css";

const ContentsEmpty = () => {

    return <div className={css`
      display: flex;
      align-content: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: white;
      min-height: 150px;
    `}>
        <span className={css`
          display: flex;
          align-content: center;
          justify-content: center;
        `}>빈 칸을눌러 콘텐츠를 선택해주세요.</span>
    </div>
}

export default ContentsEmpty