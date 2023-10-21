const HeadImage = () => {
  const realText = "i am cornerstone ephraim *";
  const rotatedText = realText.split("").map((char, i) => (
    <span key={i} style={{ transform: `rotate(${i * 13.5}deg)` }}>
      {char}
    </span>
  ));
  return (
    <div className="relative w-[10.45rem] h-[10.45rem] rounded-full flex justify-center items-center">
      <div className="w-[5.625rem] h-[5.625rem] bg-center absolute rounded-full bg-cover header_image"></div>
      <div className="absolute w-full h-full" id="bent_text">
        <p className="font-medium">{rotatedText}</p>
      </div>
    </div>
  );
};

export default HeadImage;
