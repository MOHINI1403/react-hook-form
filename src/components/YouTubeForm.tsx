import {useForm} from 'react-hook-form'
import {DevTool} from "@hookform/devtools"
type FormValues={
  username:string
  email:string
  channel:string;
  social:{
    twitter:string;
    facebook:string;
  };
  phoneNumbers:string[];
}
const YouTubeForm = () => {


  const form=useForm<FormValues>({
    defaultValues:async()=>{
      const reponse=await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data=await reponse.json()
      return{
        username:"Batman",
        email:data.email,
        channel:"",
        social:{
          twitter:"",
          facebook:""
        },
        phoneNumbers:["",""]

      }
      
    }
  });
  // Destructuring the form methods and state from the hook
  const { register, handleSubmit, watch, formState: { errors } ,control} = form;
  const{name,ref,onChange,onBlur}=register("username")
  /*
   Manage form data 
   Submit form data
   Enforce validations and provide visual feedback 
  */
 const onSubmit=(data:FormValues)=>{
  console.log('Form Submiited');
 }
  return (
    /*adding no validate attribute prevents browser validations */ 
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className='form-control'>
        <label htmlFor='username'>username</label>
        <input type='text' id='username' {...register("username",{
          required:'Username is Required',

          })}
        />

        <p>{errors.username?.message}</p>
      </div>
      <div className='form-control'>

        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' {...register("email",{
          pattern:{
            value:/^[a-zA-Z0-9.!#$&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/,
            message:'Invalid Email-format'
          } 
        })}/>
        <p>{errors.email?.message}</p>
      </div>
      <div className='form-control'>
        <label htmlFor='channel'>channel</label>
        <input type='text' id='channel' {...register("channel")} />
        <p>{errors.channel?.message}</p>
      </div>
      <div className='form-control'>
        <label htmlFor='twitter'>Twitter</label>
        <input type='text' id='twitter' {...register("social.twitter")} />
        
      </div>
      <div className='form-control'>
        <label htmlFor='facebook'>Facebook</label>
        <input type='text' id='facebook' {...register("social.facebook")} />
        
      </div>
      <div className='form-control'>
        <label htmlFor='primary-phone'>Primary Phone Number</label>
        <input type='text' id='primary-phone' {...register("phoneNumbers.0")} />
        
      </div>
      <div className='form-control'>
        <label htmlFor='secondary-phone'>Secondary Phone Number</label>
        <input type='text' id='secondary-phone' {...register("phoneNumbers.1")} />
        
      </div>
      <button>Submit</button>
      <DevTool control={control} />
    </form>
  )
}

export default  YouTubeForm