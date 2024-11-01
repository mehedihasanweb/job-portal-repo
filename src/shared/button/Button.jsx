// eslint-disable-next-line react/prop-types
const Button = ({ title }) => {
  return (
    <button className="px-4 py-3 bg-gradient-to-r from-[#808efe] via-[#8b81ff] to-[#9577ff] text-white rounded-full text-xl font-semibold">
      {title}
    </button>
  );
};

export default Button;
