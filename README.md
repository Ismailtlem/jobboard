# Job board website

Job board website for junior deelopers position.
The project is developed with [Create React App](https://github.com/facebook/create-react-app) and [Firebase](firebase.google.com).
The project is far from finished but you can view the current progress at (https://joblisting-b53d5.web.app/)

## Getting Started

To get started, you just need to clone the project to your local machine, install the dependencies and start coding

```bash
# Clone the repository
git clone  git@github.com:Ismailtlem/jobboard.git
# Install the dependencies
npm install
```

You can view your project locally at http://localhost:3000/

## Technologies Used

|  Stack   |      Technology Used       |    Hosting    |
| :------: | :------------------------: | :-----------: |
| Frontend | React, Redux and Bootstrap |   Firebase    |
| Backend  |          Node js           |    Heroku     |
| Database |          MongoDB           | MongoDB Atlas |

## Mongo Atlas

Create a file .env on the backend folder and copy the Mongo Atlas key there

## Deployment

You can deploy your project to firebase by puttin your firebase settings at `src/firebase.js` and running `npm run build && firebase deploy`
