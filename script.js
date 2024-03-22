let mathsArr = [
  {
    id: -1,
    title: " Simpson's ⅜ th method",
    code: `
    #include <iostream>
    #include <string>
    
    using namespace std;
    
    class Person {
    public:
        string name;
        int age;
    
        Person(string name, int age) {
            this->name = name;
            this->age = age;
        }
    };
    
    Person findEldest(Person people[], int size) {
        Person eldest = people[0];
        for (int i = 1; i < size; i++) {
            if (people[i].age > eldest.age) {
                eldest = people[i];
            }
        }
        return eldest;
    }
    
    int main() {
        Person people[] = {
            Person("Jane", 30),
            Person("Jim", 35),
            Person("Jessica", 40)
        };
    
        int size = sizeof(people) / sizeof(people[0]);
    
        Person eldest = findEldest(people, size);
    
        cout << "The eldest person is: " << eldest.name << " with age " << eldest.age << endl;
    
        return 0;
    }
    `,
  },
  {
    id: 0,
    title: " ",
    code: `
    #include<iostream>
    using namespace std;
    
    class Student{
      public:
        int roll;
        Student(int rollNum){
          roll = rollNum;
        }
    };
    
    class Test:public Student{
      public:
        float sub1,sub2,sub3;
        Test(int rollNum,float s1,float s2, float s3):Student(rollNum){
          sub1 = s1;
          sub2 = s2;
          sub3 = s3;
        }
    };
    
    class Sports{
      public:
        float score;
        Sports(float score){
          this->score = score;
        }
    };
    
    class Total:public Test,public Sports{
      public:
        float total;
        Total(int roll, float s1, float s2, float s3, float s) : Test(roll, s1, s2, s3), Sports(s) {
          total = s1+s2+s3+s;
        }
        void display(){
          cout<<"Total Marks is:- "<<total;
        }
    };
    
    
    int main(){
      Total t(43,100,100,100,100);
      t.display();
    }`,
  },
  {
    id: 1,
    title: " Simpson's ⅜ th method",
    code: `
//Simpson's ⅜ th method
clc;clear;
deff('y=f(x)','y=1/(1+x^2)')
a=input("Enter a lower limit: ")
b=input("Enter a heigher limit: ")
n=input("Enter a step size: ")
h=(b-a)/n
x=0
y=0
sum1=0
sum2=0
Sum3=0
for i=0:n
x=x+i*h
y=f(x)
if i==1|i==n then
sum1=sum1+y
else if (modulo(i,3)==0)
sum2=sum2+y
else
Sum3=sum3+y
end
end
I=(3h/8)*(sum1+2*sum2+3*sum3)
printf('The value of integration=%0.4f',I)`,
  },
  {
    id: 2,
    title: ` RK - 4 method`,
    code: `
//RK - 4 method
clc;clear;
deff('y1=f(x,y)','y1=x^2+y^2')
h=0.1
x=1
y=2
xn=1.2
n=(xn-x)/h
for i=1:2
k1=h*f(x,y)
k2=h*f(x+h/2,y+k1/2)
k3=h*f(x+h/2,y+k2/2)
k4=h*f(x+h,y+k3)
k=(k1+2*k2+2*k3+k4)/6
y=y+k
x=x+h
printf('\n The value of function at %.2f is
=%.4f',x,y)
end`,
  },
  {
    id: 3,
    title: ` RK - 2 method`,
    code: `
    //RK - 2 method
    clc;clear;
    deff('y1=f(x,y)','y1=x^2+y^2')
    h=0.1
    x=1
    y=2
    xn=1.2
    n=(xn-x)/h
    for i=1:2
    k1=h*f(x,y)
    k2=h*f(x+h,y+k1)
    k=(k1+k2)/2
    y=y+k
    x=x+h
    printf('\n The value of function at %.2f is
    =%.4f',x,y)
    end`,
  },
  {
    id: 4,
    title: ` Correlation`,
    code: `
    //Correlation
    clc;clear;
    x=[1 2 3 4 5 6 7]
    y=[4 6 8 10 12 14 16]
    n=length(x)
    N=n*sum(x.*y)-sum(x)*sum(y)
    D=sqrt(n*sum(x.*x)-(sum(x))^2)*sqrt(n*sum(y.*y)-(s
    um(y))^2)
    r=N/D
    printf('\n \t The coefficient of correlaion is =%.2f',r)`,
  },
  {
    id: 5,
    title: `Euler's modified method`,
    code: `
    //Euler's modified method
    clc;clear;
    deff('y1=f(x,y)','y1=x^2+y')
    x=0
    y=1
    x0=0.04
    h=0.02
    n=(x0-x)/h
    for i=1:2
    y1=y+h*f(x,y)
    for j=1:10
    y1=y+(h/2)*(f(x,y)+f(x+h,y1))
    printf('\n The value of %dth approximated y%d
    is =%0.8f',j,i,y1)
    end
    x=x+h
    printf('\n The value of the function at %0.2f is =
    %0.4f',x,y1)
    printf('\n %dth iteration is over\n\n\n\n\n\n',i)
    end`,
  },
  {
    id: 6,
    title: `Euler’s method`,
    code: `
Euler’s method
clc;clear;
deff('y1=f(x,y)','y1=x^2+y^2')
h=0.1
x=1
y=2
xn=1.2
n=(xn-x)/h
for i=1:2
y=y+h*f(x,y)
x=x+h
printf('\n The value of function at %.2f is %.4f',x,y)
end`,
  },
  {
    id: 7,
    title: `Simpson’s ⅓ rd rule`,
    code: `
    //Simpson’s ⅓ rd rule
    clc;clear;
    deff('y=f(x)','y=1/(1+x^2)')
    a=input("Enter lower limit=")
    b=input("Enter higher limit=")
    n=input("Enter step size=")
    h=b-a/n
    sum1=0
    sum2=0
    sum3=0
    for i=0:n
    x=a+i*h
    y=f(x)
     disp([x y])
    if(i==0|i==n) then
    sum1=sum1+y
    else if(modulo(i,2)==0) then
    sum2 =sum2+y
    else
    sum3=sum3+y
    end
    end
    end
    I=(h/3)*(sum1+2*sum2+4*sum3)
    printf('The value of integration is=%0.4f',I)`,
  },
  {
    id: 8,
    title: `Trapezoidal method`,
    code: `
//Trapezoidal method
clc;clear;
deff('y=f(x)','y=1/(1+x^2)')
x=0:0.2:1
n=length(x)
h=x(2)-x(1)
sum=0
for i=1:n
if i==1 | i==n then
sum=sum+f(x(i));
else
sum=sum+2*f(x(i))
end
end
I=sum*(h/2)
printf('The value of integration is =%0.4f',sum)`,
  },
  {
    id: 9,
    title: ` Interpolation Langrange’s method`,
    code: `
    //Interpolation Langrange’s method
    clc;clear;
    X=[1 2 5 10]
    Y=[5 -3 9 509]
    n=length(X)
    x=3
    L=0
    for i=1:n
    N=1
    D=1
    for j=1:n
    if(i==j)
    continue;
    else
    N=N*(x-X(j))
    D=D*(X(i)-X(j))
    end
    end
    L=L+(N/D)*Y(i);
    end
    printf('The value of function at %.2f is %.3f',x,L)`,
  },
  {
    id: 10,
    title: `Interpolation : Newton forward method`,
    code: `
//Interpolation : Newton forward method
clc;clear;
x=[3 6 9 12 15]
y=[2 680 4454 15698 40730]
h=3
X=4
x=3
c=1
for i=1:4
d1(c)=y(i+1)-y(i)
c=c+1
end
c=1
for i=1:3
d2(c)=d1(i+1)-d1(i)
c=c+1
end
c=1
for i=1:2
d3(c)=d2(i+1)-d2(i)
c=c+1
end
c=1
for i=1:1
d4(c)=d3(i+1)-d3(i)
c=c+1
end
d=[d1(4) d2(3) d3(2) d4(1)]
z=1;y_x=y(5)
u=(X-x)/h
for i=1:4
z=1
for j=1:i
z=z*(u+(j-1))
end
y_x=y_x +(z*d(i))/(factorial(i))
end
printf('value of function at %f is:%f',X,y_x)`,
  },
  {
    id: 11,
    title: `Interpolation : Newton forward method`,
    code: `
    //Interpolation : Newton forward method
    clc;clear;
    x=[3 6 9 12 15]
    y=[27 189 657 1593 3159]
    h=3
    X=4
    x=3
    c=1
    for i=1:4
    d1(c)=y(i+1)-y(i)
    c=c+1
    end
    c=1
    for i=1:3
    d2(c)=d1(i+1)-d1(i)
    c=c+1
    end
    c=1
    for i=1:2
    d3(c)=d2(i+1)-d2(i)
    c=c+1
    end
    c=1
    for i=1:1
    d4(c)=d3(i+1)-d3(i)
    c=c+1
    end
    d=[d1(1) d2(1) d3(1) d4(1)]
    z=1;y_x=y(1)
    u=(X-x)/h
    for i=1:4
    z=1
    for j=1:i
    z=z*(u-(j-1))
    end
    y_x=y_x +(z*d(i))/(factorial(i))
    end
    printf('value of function at %f is:%f',X,y_x)`,
  },
  {
    id: 12,
    title: `Newton Ruphson method`,
    code: `
//Newton Ruphson method
clc;clear;
deff('y=f(x)','y=x^3-2*x-5')
deff('y=df(x)','y=3*x^2-2')
a=3
for i=1:20
c=a-f(a)/df(a)
a=c
printf('\n The %dth approximation is=%.3f',i,c)
end`,
  },
  {
    id: 13,
    title: `Regular falsi method`,
    code: `
//Regular falsi method
clc;clear;
deff('y=f(x)','y=x^2-x^2-x-1')
a=1
b=2
for i=1:20
c=(b*f(b)-
a*f(a))/(f(b)-f(a))
if (f(a)*f(b)<0)then
a=c
else
b=c
end
printf('\n the %d th aporimation is %.3f',i,c)
end`,
  },
  {
    id: 14,
    title: `BISECTION METHOD`,
    code: `
//BISECTION METHOD
clc;clear;
deff('y=f(x)','y=x^3+x^2+x-1')
a=2
b=3
for i=1:20
c= (a+b)/2
if (f(a)*f(c)<0)then
b=c
else
a=c
end
printf('\n the %dth aporimation is %0.3f',i,c)
end`,
  },
];

let codeSection = document.querySelector(".code");

function addCode(value) {
  let mathCodeSec = document.createElement("div");
  mathCodeSec.classList.add("maths-code");
  let h4 = document.createElement("h4");
  h4.innerHTML = `
  ${value.title}
  <br />
  `;
  let preCode = document.createElement("pre");
  mathCodeSec.innerHTML = `
  <div class="copyData">
  <p>Copied</p>
</div>`;
  preCode.textContent = value.code;
  mathCodeSec.appendChild(h4);
  mathCodeSec.appendChild(preCode);
  return mathCodeSec;
}

mathsArr.forEach((value) => {
  codeSection.appendChild(addCode(value));
});

let preAll = document.querySelectorAll("pre");

function copyToClipboard(text, copy) {
  navigator.permissions
    .query({ name: "clipboard-write" })
    .then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        return navigator.clipboard.writeText(text);
      } else if (result.state === "denied") {
        return Promise.reject(new Error("Clipboard permission is required"));
      }
    })
    .then(() => {
      gsap.to(copy, {
        top: "-40px",
        duration: 0.3,
        opacity: 1,
        onComplete: function () {
          gsap.to(copy, {
            delay: 0.4,
            top: 0,
            duration: 0.3,
            opacity: 0,
          });
        },
      });
    })
    .catch((error) => {
      return;
    });
}

preAll.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let code = e.target.textContent;
    let copySection = e.target.parentNode.querySelector(".copyData");
    copyToClipboard(code, copySection);
  });
});

const newCopy = (text) => {
  navigator.permissions
    .query({ name: "clipboard-write" })
    .then(async (result) => {
      if (result.state === "granted" || result.state === "prompt") {
        await navigator.clipboard.writeText(text);
      } else if (result.state === "denied") {
        throw new Error("Clipboard permission is required");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

let counter = 0;
async function copycp() {
  setTimeout(() => {
    let interval = setInterval(() => {
      let arr = mathsArr[counter];
      newCopy(arr.code);
      if (counter === 13) {
        clearInterval(interval);
      } else {
        counter++;
      }
    }, 100);
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    copycp();
  }, 2000);
});
