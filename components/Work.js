import { React, useState } from "react";
import styles from "../styles/Work.module.css";
import Image from "next/image";
import Link from "next/link";
import WorkPopup from "../components/WorkPopup";
import Starburst from "../public/starburst.svg";
import NightModeStarburst from '../public/darkmodestarburst.svg';

const imageStyle = {
  height: "0",
  width: "0",
  display: "none",
};

const currentImageStyle = {
  width: "100%",
  height: "auto",
  display: "block",
};

const Work = (props) => {
  const { windowSize, isNightMode } = props.props;
  const [work, setWork] = useState("Gloompowder");
  const [workModal, setWorkModal] = useState(false);

  const choosingWorkANDupdatingWorkState = (e) => {
    setWork(e.target.innerText);
  };

  const conditionalRenderWork = () => {
    return !isNightMode && windowSize.width > 768
      ? "workflap"
      : !isNightMode && windowSize.width <= 768
      ? "mobileWorkflap"
      : isNightMode && windowSize.width > 768
      ? "nightMode-workflap"
      : isNightMode && windowSize.width <= 768
      ? "nightMode-mobileWorkflap"
      : "";
  };

  const conditionalRenderWorkImage = () => {
    switch (work) {
      case "Gloompowder":
        return "./Gloompowder";
        break;
      case "StudioGloomLinks":
        return "./StudioGloomLinks";
        break;
      case "Hack The Planet":
        return "./Hack The Planet";
        break;
      case "BrainGain":
        return "./BrainGain";
        break;
      default:
        return "./Gloompowder";
    }
  };

  const toggleWorkModal = () => {
    setWorkModal((prevModal) => !prevModal);
  };

  const conditionalRenderWorkModal = () => {
    return workModal ? (
      <WorkPopup
        props={props}
        toggleWorkModal={toggleWorkModal}
        conditionalRenderWork={conditionalRenderWork()}
        conditionalRenderWorkImage={conditionalRenderWorkImage()}
      />
    ) : (
      ""
    );
  };

  return (
    <>
      <div className={styles[conditionalRenderWork()]} id="workSection">
        {conditionalRenderWorkModal()}
        <div className={styles["workImage"]} onClick={toggleWorkModal}>
          <div>
            <div className={styles[conditionalRenderWorkImage()]}>
              {/* <Link href = {conditionalRenderWorkImage()} target= '_blank' referrerPolicy="noreferr" */}
              <Image
                alt={conditionalRenderWorkImage()}
                className={conditionalRenderWorkImage()}
                src={conditionalRenderWorkImage() + ".png"}
                width="100"
                height="100"
                style={currentImageStyle}
                unoptimized
              />
              {/* </Link> */}
              <div className={styles["rotating-circle-outside"]}>
                <Image
                  className={styles["rotating-starburst"]}
                  alt="rotating starburst shape"
                  width="5rem"
                  height="auto"
                  src={isNightMode ? NightModeStarburst : Starburst}
                />
                <div className={styles["rotating-circle"]}>click me!</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["workTitle"]}>
          <div
            onMouseOver={choosingWorkANDupdatingWorkState}
            onClick={choosingWorkANDupdatingWorkState}
          >
            <p>Gloompowder</p>
          </div>
          <div
            onMouseOver={choosingWorkANDupdatingWorkState}
            onClick={choosingWorkANDupdatingWorkState}
          >
            <p>StudioGloomLinks</p>
          </div>
          <div
            onMouseOver={choosingWorkANDupdatingWorkState}
            onClick={choosingWorkANDupdatingWorkState}
          >
            <p>Hack The Planet</p>
          </div>
          <div
            onMouseOver={choosingWorkANDupdatingWorkState}
            onClick={choosingWorkANDupdatingWorkState}
          >
            <p>BrainGain</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
