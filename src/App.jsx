import Form from "./modules/form/form";

const App = () => {
    const submit = (data) => { // метод який опрацьовує результат виконання форми (!! тільки в батьківському компоненті)
        const newData = {
            ...data,
            role: 'guest',
        };
        console.log(newData);
    };

    return (
        <>
            <Form submit={submit} />
            <Form submit={submit} />
        </>
    );
};
 


export default App;
