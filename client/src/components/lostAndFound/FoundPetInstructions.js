const FoundPetInstructions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white ">
      <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
        How to Report a Found Pet
      </h1>

      <div className="mb-4 p-3 bg-gray-100 rounded-md shadow-sm">
        <h2 className="text-m font-semibold mb-1 text-gray-700">
          1. Mark the Location on the Map
        </h2>
        <p className="text-sm text-gray-600">
          - Find the last known location of your pet on the map.
          <br />- Click on that spot to place a marker, which will serve as a
          reference point.
        </p>
      </div>

      <div className="mb-4 p-3 bg-gray-100 rounded-md shadow-sm">
        <h2 className="text-m font-semibold mb-1 text-gray-700">
          2. Access the Report Form
        </h2>
        <p className="text-sm text-gray-600">
          - Click on the marker to open a popup with further instructions.
          <br />- Follow the link provided in the popup to reach a detailed
          reporting form.
        </p>
      </div>

      <div className="mb-4 p-3 bg-gray-100 rounded-md shadow-sm">
        <h2 className="text-m font-semibold mb-1 text-gray-700">
          3. Complete the Form
        </h2>
        <p className="text-sm text-gray-600">
          Fill out the form with essential information about what pet you found,
          such as:
          <br />
          - A photo
          <br />
          - Breed, color, and size
          <br />
          - Last known location and time
          <br />
          - Distinctive features (collar, microchip number, etc.)
          <br />
          Provide your contact information (phone and/or email) so you can be
          reached for any updates.
        </p>
      </div>

      <div className="mb-4 p-3 bg-gray-100 rounded-md shadow-sm">
        <h2 className="text-m font-semibold mb-1 text-gray-700">4. Submit</h2>
        <p className="text-sm text-gray-600">
          - Submit the form to notify us so we can come and help the pet.
        </p>
      </div>
    </div>
  );
};

export default FoundPetInstructions;
