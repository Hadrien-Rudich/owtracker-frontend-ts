import { FaCheck } from 'react-icons/fa';

function ConfirmGameEdit() {
  return (
    <button type="submit" className="text-validate hover:scale-125">
      <FaCheck className="sign lg:h-[1.2rem] lg:w-[1.2rem] h-[1.4rem] w-[1.4rem]" />
    </button>
  );
}

export default ConfirmGameEdit;
