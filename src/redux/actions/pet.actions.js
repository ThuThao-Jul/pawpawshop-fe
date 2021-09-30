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

const getAllPets = (id) => async (dispatch) => {
    dispatch({type: types.POST_PET_REQUEST, payload: null});

    try {
        let url=`/pet?ownerId=${id}`;
        const res = await api.get(url);
        dispatch({type: types.GET_PET_SUCCESS, payload: res.data.data.pets})
    } catch (error) {
        dispatch({type: types.GET_PET_FAILURE, payload: error})
    }
};

const deletePet = ({ownerId, petId}) => async (dispatch) => {
    dispatch({type: types.POST_PET_REQUEST, payload: null});

    try {
        let url = `/pet/${petId}`;
        await api.delete(url);
        toast.success("Your pet has been deleted successfully.")

        //get current pets
        const res = await api.get(`/pet?ownerId=${ownerId}`);
        dispatch({type: types.DELETE_PET_SUCCESS, payload: res.data.data.pets})
    } catch (error) {
        dispatch({type: types.DELETE_PET_FAILURE, payload: error})
    }
};

export const petAction = { postNewPet, getAllPets, deletePet}