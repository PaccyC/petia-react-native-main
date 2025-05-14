import { ButtonProps, TextInputProps } from "react-native";

export interface CustomButtonProps extends ButtonProps{
    onPress: ()=> void;
    containerStyle?: any;
    textStyle?: any;
    title:string

}


export interface CustomInputProps  extends TextInputProps{
    onChangeText: (text:string)=> void;
    labelText?:string;
    labelStyle?:any;
    placeholder?:string;
    containerStyle?:any;
    iconRight?:any

}

export interface SearchInputProps  extends TextInputProps{
    onChangeText: (text:string)=> void;
    labelText?:string;
    labelStyle?:any;
    placeholder?:string;
    containerStyle?:any;
    iconRight?:any

}

export interface DoctorCardProps {
    image:any;
    name:string;
    department:any;
    rating:number;
    distanceFromYou:number;
    onPress?: () => void;
}