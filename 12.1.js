function counterReducer(at,c)//here at represents action type, and c represents cunter.
{
    if (at=='INC')//if action type is INC, c is incremented
    {
        c++;
        return c;
    }
    else//else if action type is 'DEC' c is decremented.
    {
        c--;
        return c;
    }
};
var counter= counterReducer('INC',5); //counterReducer function is called here.
console.log(counter);//prints 6 how many ever times it is called, hence its a pure funtion