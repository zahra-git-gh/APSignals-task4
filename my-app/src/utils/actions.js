"use server"

export async function postData(url, data){
    try {
        const res=await fetch(url, {method:"POST",  headers: {
            "Content-Type": "application/json",
          }, body:JSON.stringify({...data})});
        return await res.json();  
    } catch (error) {
        console.log(error);
    }
}

export async function getData(url){
    try {
        const res=await fetch(url);
        return await res.json()
    } catch (error) {
        console.log(error);
    }
}