import { Rocket, X, Check } from "lucide-react";

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notifications</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISTA
        </button>
      </div>

      <div>
        <div className="dark:bg-zinc-950 dark:text-gray-400  bg-zinc-300 text-gray-700 px-5 py-5 text-sm ">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          
          <div className="bg-zinc-200 dark:bg-zinc-800 px-8 py-4 flex items-start gap-6">
            <Rocket className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-950 dark:text-zinc-100">
                You are invited to make part of Raiz Tech Company.
              </p>
              <div className="text-xxs dark:text-zinc-400 text-zinc-800 flex items-center gap-2">
                <span>Invitation</span>
                <span>3 minutes ago...</span>
              </div>
            </div>
          </div>


          <div className="bg-zinc-200 dark:bg-zinc-800 px-8 py-4 flex items-start gap-6">
            <Rocket className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed  text-zinc-950 dark:text-zinc-100">
                You are invited to make part of Raiz Tech Company.
              </p>
              <div className="text-xxs dark:text-zinc-400 text-zinc-800 flex items-center gap-2">
                <span>Invitation</span>
                <span>3 minutes ago...</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div className="dark:bg-zinc-950 dark:text-gray-400  bg-zinc-300 text-gray-700 px-5 py-5 text-sm ">
          Antigas
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          
          <div className="bg-zinc-200 dark:bg-zinc-800 px-8 py-4 flex items-start gap-6">
            <Rocket className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed  text-zinc-950 dark:text-zinc-100">
                You are invited to make part of Raiz Tech Company.
              </p>
              <div className="text-xxs dark:text-zinc-400 text-zinc-800 flex items-center gap-2">
                <span>Invitation</span>
                <span>3 minutes ago...</span>
              </div>
            </div>
            <div className="flex gap-1 self-center">
                <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-700 hover:bg-zinc-600">
                    <X className="w-3 h-3 text-zinc-50"/>
                </button>
                <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-600 hover:bg-violet-500">
                    <Check className="w-3 h-3 text-zinc-50"/>
                </button>
            </div>
          </div>


          <div className="bg-zinc-200 dark:bg-zinc-800 px-8 py-4 flex items-start gap-6">
            <Rocket className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed  text-zinc-950 dark:text-zinc-100">
                You are invited to make part of Raiz Tech Company.
              </p>
              <div className="text-xxs dark:text-zinc-400 text-zinc-800flex items-center gap-2">
                <span>Invitation</span>
                <span>3 minutes ago...</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
