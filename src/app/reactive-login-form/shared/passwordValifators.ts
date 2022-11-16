import { AbstractControl } from "@angular/forms";

export function passwordValidator(control:AbstractControl):{[key:string]:any}|null
{
    const password = control.get('password');
    const confirmPass = control.get('cnpassword');
    if(password?.pristine || confirmPass?.pristine){
        return null
    }
    return password && confirmPass && password.value === confirmPass.value ? {'misMatch':true}:null
}