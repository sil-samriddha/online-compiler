const DefaultCodes = [
    {
        'id' : 0,
        'language' : 'c',
        'ext' : 'c',
        'default' : 
`#include <stdio.h>

int main() {
    // Write C code here
    printf("Hello world");

    return 0;
}`
    },
    {
        'id' : 1,
        'language' : 'cpp',
        'ext' : 'cpp',
        'default' : 
        
`#include <iostream>
using namespace std;

int main() {
    // Write C++ code here
    cout << "Hello world!";

    return 0;
}`
    },
    {
        'id' : 2,
        'language' : 'java',
        'ext' : 'java',
        'default' : 
`public class QuickCompiler {
    public static void main(String[] args) {
        // write your java code here
        System.out.println("Hello, World!");
    }
}`
    },
    {
        'id' : 3,
        'language' : 'csharp',
        'ext' : 'cs',
        'default' : 
`using System;
class QuickCompiler {
  static void Main() {
      
    Console.WriteLine("Hello World");
    
    // write your C# code here
  }
}`
        
        
    },
    {
        'id' : 4,
        'language' : 'python',
        'ext' : 'py',
        'default' : 
`# write your python code here

print ('Hello World')`
        
    },
    {
        'id' : 5,
        'language' : 'go',
        'ext' : 'go',
        'default' :
`package main
import "fmt"

func main() {
    fmt.Println("Hello World")

    // write your golang code here
}`

    },
    {
        'id' : 6,
        'language' : 'javascript',
        'ext' : 'js',
        'default' :
        
`console.log("Hello World");

// write your js code here`

    }
]

export default DefaultCodes;