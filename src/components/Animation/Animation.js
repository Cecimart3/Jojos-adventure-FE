import "./Animation.scss";

function Animation(props) {
  const { image, animate, isDead, isEnd } = props;
  const randomizer = Math.floor(Math.random() * 2);
  const animationClasses = (class1, class2, class3 = null) => {
    let className = animate ? class1 : class2;
    if (!class3 && animate) {
      return className;
    }
    return (image?.includes("boss") || randomizer) && animate
      ? class3
      : className;
  };

  const animateEnv = animationClasses("animation--run", "");
  const animateJojo = animationClasses(
    "animation__jojo--run",
    "animation__jojo--standing",
    "animation__jojo--punch"
  );
  const animateObstruction = animationClasses(
    "animation__obstruction--run",
    "",
    "animation__obstruction--punch"
  );
  let overMessage = isEnd ? (isDead ? "GAME OVER!" : "WINNER!!!!") : "";

  return (
    <div className={`animation ${animateEnv}`}>
      <div className="animation__message-container">
        <h1 className="animation__overmessage">{overMessage}</h1>
        <h1 className="animation__overmessage">{overMessage}</h1>
        <h1 className="animation__overmessage">{overMessage}</h1>
      </div>

      <div className={`animation__jojo ${animateJojo}`}></div>
      <div className={`animation__obstruction ${animateObstruction}`}>
        {animate && (
          <img className="animation__obstruction-img" src={image} alt="" />
        )}
      </div>
    </div>
  );
}

export default Animation;
