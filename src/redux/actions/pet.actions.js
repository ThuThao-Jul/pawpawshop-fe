import { toast } from "react-toastify";
import api from "../../apiService";
import * as types from "../constants/pet.constants";


const postNewPet = ({pet}, id) => async (dispatch) => {
    dispatch({type: types.POST_PET_REQUEST, payload: null});

    try {
        let url ='/pet';
        await api.post(url, pet);
        toast.success('Created new pet successfully');

        //get current pets
        const res = await api.get(`/pet?ownerId=${id}`)
        dispatch({type: types.POST_PET_SUCCESS, payload: res.data.data.pets});
    } catch (error) {
        dispatch({type: types.POST_PET_FAILURE, payload: error})
    }
};

export const petAction = { postNewPet}