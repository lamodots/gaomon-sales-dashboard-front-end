export const useAuth =  () => {
    // const user = localStorage.getItem('token')
    const user = true
    if(user){
        return true
    }else {
        return false
    }

};
