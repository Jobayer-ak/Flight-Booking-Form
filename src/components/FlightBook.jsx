/* eslint-disable react/no-unescaped-entities */
import { useSelector, useDispatch } from 'react-redux';
import { book } from "../redux/flightBooking/actions.js"

function FlightBook() {
  //redux hooks
  const books = useSelector((state) => state);
  const dispatch = useDispatch();

  const destFrom = ['Dhaka', 'Sylhet', 'Saidpur', "Cox's Bazar"];
  const destTo = ['Dhaka', 'Sylhet', 'Saidpur', "Cox's Bazar"];
  const guests = ['1 Person', '2 Persons', '3 Persons', '4 Persons'];
  const classM = ['Economic', 'Business'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.from.value);
    const formElement = e.target;
    const formData = {};

    for (let i = 0; i < formElement.elements.length; i++) {
      const element = formElement.elements[i];

      if (element.name) {
        formData[element.name] = element.value;
      }
    }
    // console.log('form Data: ', formData);
    dispatch(book(formData));

  };

  console.log("stored data: ", books);

  return (
    // input
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
          {/* From */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>

                {destFrom?.map((d, index) => (
                  <option value={d} key={index}>
                    {d}
                  </option>
                ))}
                
              </select>
            </div>
          </div>

          {/* To */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                {destTo?.map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date  */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
            />
          </div>

          {/* Guests */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                {guests?.map((g, index) => (
                  <option value={g} key={index}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Class */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                {classM?.map((c, index) => (
                  <option value={c} key={index}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default FlightBook;
