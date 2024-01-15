import { useForm } from 'react-hook-form';

import {DevTool} from "@hookform/devtools"

export const Sampleform3=()=>{
    const form=useForm();
    const {register,control}=form;
    return(
        <div>
            <form>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' {...register("username")} />
                <button>Submit</button>
                <DevTool control={control} />

            </form>

        </div>
    )
}
