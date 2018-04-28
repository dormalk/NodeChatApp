const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users=new Users();
    users.users = [{
      id: '1',
      name: 'Jone',
      room: 'Alpha'
    }, {
      id: '2',
      name: 'May',
      room: 'Beta'
    }, {
      id: '3',
      name: 'Yuli',
      room: 'Alpha'
    }];
  });

  it('should return correct user', () => {
    var users = new Users();
    var user = {
      id:'1',
      name:'JJJ',
      room:'YYY'
    }

    var resUser = users.addUser(user.id,user.name,user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove user by id', () => {
    var userId = '2';
    var resUser = users.removeUser(userId);

    expect(resUser.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '4';
    var resUser = users.removeUser(userId);

    expect(resUser).toBe(undefined);
    expect(users.users.length).toBe(3);

  });

  it('should not find user', () => {
    var userId = '4';
    var resUser = users.getUser(userId);
    expect(resUser).toBe(undefined);
  });

  it('should not find user', () => {
    var userId = '2';
    var resUser = users.getUser(userId);
    expect(resUser.id).toBe(userId);
  });

  it('should return all users in Alpha room', () => {
    var resUser = users.getUserList('Alpha');
    expect(resUser).toEqual([users.users[0].name,users.users[2].name]);
  });

  it('should return all users in Beta room', () => {
    var resUser = users.getUserList('Beta');
    expect(resUser).toEqual([users.users[1].name]);
  });

});
