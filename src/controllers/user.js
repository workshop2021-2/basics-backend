let users = [
  {
    id: 1,
    name: 'Carlos',
    lastname: 'Dela Cruz',
    email: 'xx@gmail.com',
  },
  {
    id: 2,
    name: 'Carlos',
    lastname: 'Dela Cruz',
    email: 'xx@gmail.com',
  },
  {
    id: 3,
    name: 'Carlos',
    lastname: 'Dela Cruz',
    email: 'xx@gmail.com',
  },
];

const getAllUsers = async (req, res) => {
  return res.status(200).json({ users });
};

const getDetailUser = async (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.status(user ? 200 : 404).json({
    user,
  });
};

const createUser = async (req, res) => {
  const user = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(user);
  return res.status(200).json({ users });
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  const actualUsers = users.length;
  users = users.filter((user) => user.id !== id);
  if (users.length === actualUsers) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.status(200).json({ message: 'Usuario borrado exitosamente' });
};

const updateUser = async (req, res) => {
  const id = Number(req.params.id);
  let user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // user = {name, email, lastname}
  // req.body = {name, email, lastname}
  user = {
    ...user,
    ...req.body,
  };
  return res.status(200).json({ user });
};

module.exports = {
  getAllUsers,
  getDetailUser,
  createUser,
  deleteUser,
  updateUser,
};
