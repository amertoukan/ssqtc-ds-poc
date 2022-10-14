export function addUser(id, accountId, email, firstName, lastName, referredByCodes){
    let initObj = {
        //The object for the user you want to upsert
        user:{
            id: id, //currentUser.uid, 
            accountId: accountId, //currentUser.uid 
            email: email, //currentUser.email 
            firstName: firstName,  
            lastName: lastName, 
            locale: 'en_US', 
            referredByCodes: [...referredByCodes],
        }
            };
}

