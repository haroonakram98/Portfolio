import Tilt from "react-parallax-tilt";
export default function ChartCArd({ title, desc, img }) {
  const imagePath = require(`../../assets/images/${img}`);
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="primary  rounded-2xl max-w-[362px]  h-full bg-gradient-to-r from-green-700 to-pink-800 p-[1px]  rounded-2xl max-w-[362px]  h-full bg-gradient-to-r from-green-700 to-pink-800 p-[1px]"
    >
      <div className="primary w-full h-full rounded-2xl p-4 flex flex-col justify-between">
        <div>
          <div className="relative w-full rounded-2xl">
            <img
              src={imagePath}
              alt={title}
              className="w-full h-40 object-cover rounded-lg border border-secondary"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[20px] lg:text-[24px]">
              {title}
            </h3>
            <p className="mt-2 text-white text-[10px] lg:text-[14px]">
              {desc}
            </p>
          </div>
        </div>

        
      </div>
    </Tilt>
  );
}
