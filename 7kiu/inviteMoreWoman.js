function inviteMoreWomen(L) {
  if(L.length <= 50 && L.length >= 2){
    man = 0;
    woman = 0;
    for (var i = 0; i < L.length; i++) {
      if(!isNaN(L[i])){
        man = L[i] == 1 ? man + 1 : man + 0;
        woman = L[i] == -1 ? woman + 1 : woman + 0;
      }
    }
    return woman > man || woman == man ? false : true;
  }
}
