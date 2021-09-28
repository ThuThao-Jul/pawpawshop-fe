import React, {useEffect} from "react";
import Banner from "../components/Banner";
import Shop from "../components/Shop/Shop";
import HallOfFrame from "../components/HallOfFrame/HallOfFrame";
import BestSeller from "../components/BestSeller";
import NewArrival from "../components/NewArrival";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { petAction } from "../redux/actions/pet.actions";

const HomePage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.data)
    const pets = useSelector((state) => state.petReducer.data)
    const d = new Date();
    const recent = d.getTime();

    const Deworming = (recordDate) => {
      const r = new Date(recordDate);
      const lastTime = r.getTime();
      const nextTime = lastTime + 1000*60*60*24*90 // 3 mths/time
      return ((nextTime - recent)/(1000*60*60*24)).toFixed(0)
    }

    const Vaccination = (recordDate) => {
      const r = new Date(recordDate);
      const lastTime = r.getTime();
      const nextTime = lastTime + 1000*60*60*24*365 // 1y/time
      return ((nextTime - recent)/(1000*60*60*24)).toFixed(0)
    }

    useEffect(() => {
        if(user){
            dispatch(petAction.getAllPets(user._id));
            pets && pets.map((d) => {
              if (d.dewormingDate){
                if (Deworming(d.dewormingDate) <= 3 && Deworming(d.dewormingDate) >= 0){
                   toast.info(`${d.name} should be dewormed within the next ${Deworming(d.dewormingDate)} day(s)`);
                };
              };
        
              if (d.vaccinationRecord){
                if (Vaccination(d.vaccinationRecord) <= 3 && Vaccination(d.vaccinationRecord) >=0){
                  toast.info(`${d.name} should be vaccinated within the next ${Vaccination(d.vaccinationRecord)} day(s)`);
                }
              };
              return 0
            });
        };
      // eslint-disable-next-line
    }, [dispatch, user]);
    

    return (
        <div>
            <Banner />
            <HallOfFrame />
            <Shop />
            <BestSeller />
            <NewArrival />
        </div>
    )
}

export default HomePage;