import useMockGameAddMutation from '../../hooks/games/useMockGameAddMutation';

function MockGamesCreation() {
  const mutateGame = useMockGameAddMutation();

  const handleSubmit = () => {
    mutateGame();
  };
  return (
    <div className="flexdiv text-5xl absolute top-[-7rem] left-[-2rem] w-10 h-10 bg-thirdColor">
      <button onClick={handleSubmit} type="button">
        +
      </button>
    </div>
  );
}

export default MockGamesCreation;
