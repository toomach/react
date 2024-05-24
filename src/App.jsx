// import Form from "./modules/form/form";
// import InputControl from "./modules/InputControl/InputControl";
import FormControl from "./modules/FormControl/FormControl";

// import { useState } from "react";

const App = () => {
    //================ Form
    // const submit = (data) => { // метод який опрацьовує результат виконання форми (!! тільки в батьківському компоненті)
    //     const newData = {
    //         ...data,
    //         role: 'guest',
    //     };
    //     console.log(newData);
    // };

    // return (
    //     <>
    //         <Form submit={submit} />
    //         <Form submit={submit} />
    //     </>
    // );
    //====================================================================================

    //================ InputControl
    // const [value, setValue] = useState('qwrtey');
    // const [userName, setUserName] = useState('user');
    
    //  return (
    //     <>
    //         <InputControl value={value} onChange={setValue} />
    //         <InputControl value={userName} onChange={setUserName} />
    //     </>
    // );
    //====================================================================================

    const submit = (data) => {
      console.log(data);
    }
    

    return (
        <>
            <FormControl submit={submit}/>  
        </>
    );
};
 


export default App;
