import { useId } from "react"; // хук для генерації айдішніків

const Form = ({ submit }) => {

    const uniqUserId = useId(); // икористовуємо ЛИШЕ для генерації id на input
    const uniqPhoneId = useId();

    const hendleSubmit = (e) => {
        e.preventDefault(); // зупинити стандартну поведінку форми (завжди!!)

        submit({ user: e.target.elements.user.value, phone: e.target.elements.phone.value });

        e.target.reset();  // щоби очистити форму
    };

    return (
        <form onSubmit={hendleSubmit}>
            <div>
                <label htmlFor={uniqUserId}>User name</label>
                <br />
                <input id={uniqUserId} type="text" name="user" />
            </div>
            <div>
                <label htmlFor={uniqPhoneId}></label>
                <br />
                <input id={uniqPhoneId} type="text" name="phone" />
            </div>
            <button type="submit">Submit</button>
        </form>
    ); // забираємо подію submit (з кнопки) у форму
};

export default Form;