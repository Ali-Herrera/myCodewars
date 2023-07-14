//Instructions

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

//Solution

 using System;

public class NoBoring 
{
    public static int NoBoringZeros(int n) 
    {
        if (n == 0)
          {
          return 0;
        }
      else 
        {
        while (n % 10 == 0){
           n = n / 10;
         }
        }
      return n;
    }

}

