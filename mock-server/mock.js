const genUser = () => {
    const userMap = new Map();

    for (let idx=0; idx<10; idx++) {
        const user = {
            id: idx.toString(),
            name: 'U-'.concat(idx.toString())
        };
        userMap.set(user.id, user);
    }

    return userMap;
}

const genChat = (roomId, getWriter) => {
    const list = [];
    for (let idx=0; idx<10; idx++) {
        const chat = {
            id: roomId.concat('_', idx.toString()),
            regTime: new Date().getTime() + idx*1000,
            modTime: 0,
            writer: getWriter(idx),
            roomId,
        }
        list.push(chat)
    }
    return list;
}

const genDirectChatRoom = (userMap) => {

    const list = [];
    const allChats = []
    for (let idx=0; idx<10; idx++) {
        const roomId = 'D-'.concat(idx.toString());
        const getWriter = (i) => {
            if (i%2 === 0) {
                return userMap.get('0')
            } else {
                return userMap.get(idx.toString())
            }
        }
        const chats = genChat(roomId, getWriter);
        const dcRoom = {
            id: roomId,
            sequence: chats.length-1,
            elice: userMap.get('0'),
            bob: userMap.get(idx.toString())
        }
        list.push(dcRoom)
        allChats.push(...chats)
    }
    return [list, allChats];
}

const genGroupChatRoom = (userMap) => {
    const owner = userMap.get('0');
    const admins = [owner];
    admins.push(userMap.get('1'))
    admins.push(userMap.get('2'))
    admins.push(userMap.get('3'))
    const members = Array.from(userMap.values());

    const roomId = 'G-001';
    const chats = genChat(roomId, () => {
        const zeroToNine = (Math.random()*10).toFixed(0);
        return userMap.get(zeroToNine);
    })
    return [{
        id: roomId,
        sequence: chats.length,
        owner, admins, members
    }, chats];
}

const main = () => {
    const userMap = genUser();
    const [dcRooms, dChats] = genDirectChatRoom(userMap);
    const [gcRoom, gChats] = genGroupChatRoom(userMap);

    const db = {
        users: Array.from(userMap.values()),
        dcRooms: dcRooms,
        gcRooms: [gcRoom],
        chats: [...gChats, ...dChats]
    }

    console.log(JSON.stringify(db, null, 4));
    return db;
}

main();