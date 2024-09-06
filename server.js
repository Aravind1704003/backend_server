const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());



// CORS middleware (allowing all origins for development)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/nakshatra-durations', async (req, res) => {
  const apiEndpoint = 'https://json.freeastrologyapi.com/nakshatra-durations';
  const apiKey = 'dmqJwjSdZ35G8yZjEhK7raBf6nkbg2Oi4AW5EI9j';

  try {
    const response = await axios.post(apiEndpoint, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/yoga-durations', async (req, res) => {
  const apiEndpoint = 'https://json.freeastrologyapi.com/yoga-durations';
  const apiKey = 'dmqJwjSdZ35G8yZjEhK7raBf6nkbg2Oi4AW5EI9j'; 

  try {
    const response = await axios.post(apiEndpoint, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/tithi-durations', async (req, res) => {
  console.log('Request Payload:', req.body);

    const apiEndpoint = 'https://json.freeastrologyapi.com/tithi-durations';
    const apiKey = 'dmqJwjSdZ35G8yZjEhK7raBf6nkbg2Oi4AW5EI9j'; 
  
    try {
      const response = await axios.post(apiEndpoint, req.body, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
      });
  
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.post('/karana-durations', async (req, res) => {
    console.log('Request Payload:', req.body);
  
      const apiEndpoint = 'https://json.freeastrologyapi.com/karana-durations';
      const apiKey = 'dmqJwjSdZ35G8yZjEhK7raBf6nkbg2Oi4AW5EI9j'; 
    
      try {
        const response = await axios.post(apiEndpoint, req.body, {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
          },
        });
    
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    app.post('/aayanam', async (req, res) => {
      console.log('Request Payload:', req.body);
    
        const apiEndpoint = 'https://json.freeastrologyapi.com/aayanam';
        const apiKey = 'dmqJwjSdZ35G8yZjEhK7raBf6nkbg2Oi4AW5EI9j'; 
      
        try {
          const response = await axios.post(apiEndpoint, req.body, {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey,
            },
          });
      
          res.json(response.data);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
      app.post('/good-bad-times', async (req, res) => {
        console.log('Request Payload:', req.body);
      
          const apiEndpoint = 'https://json.freeastrologyapi.com/good-bad-times';
          const apiKey = 'dmqJwjSdZ35G8yZjEhK7raBf6nkbg2Oi4AW5EI9j'; 
        
          try {
            const response = await axios.post(apiEndpoint, req.body, {
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
              },
            });
        
            res.json(response.data);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
        });
        app.post('/rahu-kalam', async (req, res) => {
          console.log('Request Payload:', req.body);
        
            const apiEndpoint = 'https://json.freeastrologyapi.com/rahu-kalam';
            const apiKey = 'dmqJwjSdZ35G8yZjEhK7raBf6nkbg2Oi4AW5EI9j'; 
          
            try {
              const response = await axios.post(apiEndpoint, req.body, {
                headers: {
                  'Content-Type': 'application/json',
                  'x-api-key': apiKey,
                },
              });
          
              res.json(response.data);
            } catch (error) {
              console.error(error);
              res.status(500).json({ error: 'Internal Server Error' });
            }
          });
          app.post('/yama-gandam', async (req, res) => {
            console.log('Request Payload:', req.body);
          
              const apiEndpoint = 'https://json.freeastrologyapi.com/yama-gandam';
              const apiKey = 'dmqJwjSdZ35G8yZjEhK7raBf6nkbg2Oi4AW5EI9j'; 
            
              try {
                const response = await axios.post(apiEndpoint, req.body, {
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                  },
                });
            
                res.json(response.data);
              } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
              }
            });
            app.post('/gulika-kalam', async (req, res) => {
              console.log('Request Payload:', req.body);
            
                const apiEndpoint = 'https://json.freeastrologyapi.com/gulika-kalam';
                const apiKey = 'dmqJwjSdZ35G8yZjEhK7raBf6nkbg2Oi4AW5EI9j'; 
              
                try {
                  const response = await axios.post(apiEndpoint, req.body, {
                    headers: {
                      'Content-Type': 'application/json',
                      'x-api-key': apiKey,
                    },
                  });
              
                  res.json(response.data);
                } catch (error) {
                  console.error(error);
                  res.status(500).json({ error: 'Internal Server Error' });
                }
              });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



