export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold text-primary">Material Theme 測試</h1>
          <p className="text-on-surface-variant">驗證顏色設定是否成功套用</p>
        </div>

        {/* Primary Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-on-surface">Primary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary text-on-primary p-6 rounded-lg">
              <p className="font-semibold">Primary</p>
              <p className="text-sm">主要顏色</p>
            </div>
            <div className="bg-primary-container text-on-primary-container p-6 rounded-lg">
              <p className="font-semibold">Primary Container</p>
              <p className="text-sm">主要容器顏色</p>
            </div>
          </div>
        </section>

        {/* Secondary Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-on-surface">Secondary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary text-on-secondary p-6 rounded-lg">
              <p className="font-semibold">Secondary</p>
              <p className="text-sm">次要顏色</p>
            </div>
            <div className="bg-secondary-container text-on-secondary-container p-6 rounded-lg">
              <p className="font-semibold">Secondary Container</p>
              <p className="text-sm">次要容器顏色</p>
            </div>
          </div>
        </section>

        {/* Tertiary Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-on-surface">Tertiary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-tertiary text-on-tertiary p-6 rounded-lg">
              <p className="font-semibold">Tertiary</p>
              <p className="text-sm">第三顏色</p>
            </div>
            <div className="bg-tertiary-container text-on-tertiary-container p-6 rounded-lg">
              <p className="font-semibold">Tertiary Container</p>
              <p className="text-sm">第三容器顏色</p>
            </div>
          </div>
        </section>

        {/* Surface Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-on-surface">Surface Levels</h2>
          <div className="space-y-2">
            <div className="bg-surface-container-lowest text-on-surface p-4 rounded-lg border border-outline-variant">
              Surface Container Lowest
            </div>
            <div className="bg-surface-container-low text-on-surface p-4 rounded-lg">
              Surface Container Low
            </div>
            <div className="bg-surface-container text-on-surface p-4 rounded-lg">
              Surface Container
            </div>
            <div className="bg-surface-container-high text-on-surface p-4 rounded-lg">
              Surface Container High
            </div>
            <div className="bg-surface-container-highest text-on-surface p-4 rounded-lg">
              Surface Container Highest
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-on-surface">Interactive Elements</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Primary Button
            </button>
            <button className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Secondary Button
            </button>
            <button className="border-2 border-outline text-primary px-6 py-3 rounded-full font-medium hover:bg-surface-container-highest transition">
              Outlined Button
            </button>
          </div>
        </section>

        {/* Error State */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-on-surface">Error State</h2>
          <div className="bg-error-container text-on-error-container p-6 rounded-lg">
            <p className="font-semibold text-error">錯誤訊息</p>
            <p className="text-sm mt-2">這是一個錯誤狀態的範例顯示</p>
          </div>
        </section>

        {/* Info Box */}
        <div className="bg-surface-container p-6 rounded-lg border border-outline-variant">
          <p className="text-on-surface-variant text-sm">
            💡 提示：切換系統的深色/淺色模式以查看顏色主題的自動切換效果
          </p>
        </div>
      </div>
    </div>
  );
}
