import { Form ,useNavigation ,useLocation} from 'react-router-dom';
const ExpenseForm = () => {
  const navigation = useNavigation();
  const text =
    navigation.state === "submitting"
      ? "Saving..."
      : navigation.state === "loading"
      ? "Saved!"
      : "Go";
      const location = useLocation();
      console.log(location.pathname)
  return (  
    <Form method='Post'>
      <label>Signup</label>
      <input type='text' name='email'/>
      <button type='submit'>{text}</button>
    </Form>
  )
}

export default ExpenseForm
