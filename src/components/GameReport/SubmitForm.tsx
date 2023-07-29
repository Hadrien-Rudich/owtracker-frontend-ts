function SubmitForm() {
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <button type="submit" className="button bg-thirdColor">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default SubmitForm;
