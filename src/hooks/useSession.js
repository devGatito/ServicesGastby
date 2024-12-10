import { v4 as uuidv4 } from 'uuid';
import { getUserIp } from "@services"
import { sha256 } from "@utils"

const useSession = () => {

	const getIpAddress = async () => {
		const ip = await getUserIp();
		const uuid = uuidv4();
		return sha256(`${uuid}${ip ? '::' + ip : ''}`)
	}

	
}

export default useSession
