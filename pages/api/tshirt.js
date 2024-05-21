// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

// pages/api/tshirt.js

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     res.status(200).json({
//       tshirt: '1',
//       size: 'large'
//     });
//   } else if (req.method === 'POST') {
//     const { id, logo } = req.body;

//     if (!logo) {
//       return res.status(418).json({
//         message: "We need logo"
//       });
//     }

//     res.status(200).json([{
//       tshirt: '1',
//       id,
//       logo
//     },
//     {
//       tshirt: '1',
//       id,
//       logo
//     }]);
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      {
        tshirt: '1',
        size: 'large'
      },
      {
        tshirt: '2',
        size: 'medium'
      },
      {
        tshirt: '3',
        size: 'small'
      }
    ]);
  } else if (req.method === 'POST') {
    const { id, logo } = req.body;

    if (!logo) {
      return res.status(418).json({
        message: "We need logo"
      });
    }

    res.status(200).json([{
      tshirt: '1',
      id,
      logo
    },
    {
      tshirt: '2',
      id,
      logo
    }]);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
