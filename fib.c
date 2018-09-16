#include <emscripten.h>

extern "C"
{
    // wrapping our function(s) with extern “C”, which prevents name mangling 
    // (note that you won’t need this for regular C code)
	EMSCRIPTEN_KEEPALIVE
    int fib(int n)
    {
        if (n == 0)
            return 0;
        else if ((n == -1) || (n == 1))
            return 1;
        else if (n > 0)
            return fib(n - 1) + fib(n - 2);
        else
            return fib(n + 2) - fib(n + 1);
    }
}