import create from 'zustand';
import { io } from 'socket.io-client';

const useStore = create(set => ({
    socket: io.connect('http://b10a-62-212-229-2.ngrok.io'),
    roles: ' ',
    setRoles: (role) => set((state) => ({ roles: role })),
    username: '',
    setUsername: (name) => set((state) => ({ username: name })),
    runeData: null,
    setRuneData: (rune) => set((state) => ({ runeData: rune })),
    startStory: null,
    setStartStory: (start) => set((state) => ({ startStory: start })),
    endStory: null,
    setEndStory: (end) => set((state) => ({ endStory: end })),
    gameData: null,
    setGameData: (data) => set((state) => ({ gameData: data })),
    mazeSide: null,
    setMazeSide: (side) => set((state) => ({ mazeSide: side })),
    runeCount: null,
    setRuneCount: (count) => set((state) => ({ runeCount: count })),
    newRune: [],
    setNewRune: (newData) => set((state) => ({ newRune: newData })),
    leaderBoardData: null,
    setLeaderBoardData: (leader) => set((state) => ({ leaderBoardData: leader })),
}))

export default useStore;     