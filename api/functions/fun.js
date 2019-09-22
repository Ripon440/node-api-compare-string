const fun = function(strA,strB,m,n){;
    
    //Base cases
    if(n == 0) return true;
    if(m == 0) return false;

    //if last charecters of both string is matched
    if (strA[m-1] == strB[n-1]) 
        return fun(strA, strB, m-1, n-1);
        
    //if last charecters of both string is not matched
    return fun(strA, strB, m-1, n);  
}

module.exports = fun;