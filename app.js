const http = require('http');


const server =http.createServer((req,res)=>{
  // console.log('INCOMING REQUEST');
  // console.log(req.method, req.url);

  if(req.method === "POST"){
    console.log(`1. headers : ${JSON.stringify(req.headers)}`);
    console.log(`2. body : ${JSON.stringify(req.body)}`);
    console.log(`3. chunk : ${JSON.stringify(req.chunk)}`);
    console.log(`4. 'INCOMING REQUEST'`);
    console.log(`5. method : ${req.method}, url : ${req.url}`);

    let body = '';
    req.on('end', () => {
      /**
       * 모든 데이터가 수신되었을 때 발생합니다. 즉, 데이터 스트림이 끝났음을 알리는 이벤트
       */
      // console.log(`body : ${body}`);
      // res.end('<h1>Got the POST request.</h1>')
      const userName = body.split('=')[1];
      res.end('<h1>' + userName + '</h1>');  // Sender에게 Response 로 보내는 Data
    })

    req.on('data', (chunk) =>{
      /**
       * 클라이언트로부터 데이터가 들어올 때마다 발생
       * 데이터는 청크(chunk) 단위로 들어오며, 이 이벤트는 데이터가 들어올 때마다 여러 번 발생할 수 있다.
       */
      body += chunk;
      console.log(`data : ${chunk}`);
    });

    req.on('error', (err) => {
      /**
       * 요청 처리 중 오류가 발생했을 때 발생
       */
      console.log(`ERROR`);
    });

  }else{
    res.setHeader('Content-Type', 'text/html');
    res.end(
      '<form method="POST"><input type="text" name="username"><button type="submit"> Create User </button></form>'
    );
  }

  // res.setHeader('Content-Type', 'text/plain');  // Response Data 를 Text로 읽게 한다
  // res.setHeader('Content-Type', 'text/html');
  
  // res.end('<h1>Response to requester</h1>');
  // res.end('<form><input type="text" name="username"><button type="submit"> Create User </button></form>');
});

server.listen(5000);